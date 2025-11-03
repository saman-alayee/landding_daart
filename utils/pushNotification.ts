import { ref } from 'vue';

export const usePushNotification = () => {
  const loadingPush = ref(false);

  const showPushPreview = async (
    title: string,
    description: string,
    logo?: File | string,
    image?: File | string,
    redirectUrl?: string
  ) => {
    if (!('Notification' in window)) {
      alert('مرورگر شما از اعلان‌ها پشتیبانی نمی‌کند.');
      return null;
    }

    try {
      loadingPush.value = true;

      if (Notification.permission === 'granted') {
        return await triggerNotification(title, description, logo, image, redirectUrl);
      } else if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          return await triggerNotification(title, description, logo, image, redirectUrl);
        }
      }

      return null;
    } catch (error) {
      console.error('Error showing notification:', error);
      return new Notification(title || 'عنوان کمپین', {
        body: description || 'متن پیش‌نمایش تبلیغ',
      });
    } finally {
      loadingPush.value = false;
    }
  };

  const triggerNotification = async (
    title: string,
    description: string,
    logo?: File | string,
    image?: File | string,
    redirectUrl?: string
  ) => {
    // Create URLs for File objects, use string URLs directly otherwise
    const iconUrl = logo instanceof File ? URL.createObjectURL(logo) : logo || 'https://picsum.photos/192/192';
    const imageUrl = image instanceof File ? URL.createObjectURL(image) : image || 'https://picsum.photos/720/360';

    const options: NotificationOptions = {
      body: description || 'متن پیش‌نمایش تبلیغ',
      icon: iconUrl,
      image: imageUrl,
      vibrate: [200, 100, 200],
      data: { url: redirectUrl || window.location.href, timestamp: Date.now() },
    };

    const notification = new Notification(title || 'عنوان کمپین', options);

    // Clean up blob URLs after showing
    notification.onshow = () => {
      setTimeout(() => {
        if (logo instanceof File) URL.revokeObjectURL(iconUrl);
        if (image instanceof File) URL.revokeObjectURL(imageUrl);
      }, 1000);
    };

    // Click behavior
    notification.onclick = (event) => {
      event.preventDefault();
      if (redirectUrl) {
        window.open(redirectUrl, '_blank');
      } else if (notification.data?.url) {
        window.open(notification.data.url, '_blank');
      }
      notification.close();
    };

    return notification;
  };

  return {
    loadingPush,
    showPushPreview,
  };
};
