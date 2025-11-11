import { defineStore } from 'pinia'
import { ref } from 'vue'

interface LeadForm {
  name: string
  email: string
  company?: string
  phone?: string
  message?: string
  city?: string
}

interface ApiResponse {
  message?: string
  error?: string
  data?: any
}

export const useCrmStore = defineStore('crm', () => {
  const loading = ref(false)
  const formMessage = ref('')

  const sendLead = async (leadForm: LeadForm) => {
    loading.value = true
    formMessage.value = ''

    try {
      const res: ApiResponse = await $fetch('https://land.daartads.com/api/crm/create-leads', {
        method: 'POST',
        body: leadForm
      })

      if (res.message) {
        formMessage.value = res.message
      } else if (res.error) {
        formMessage.value = `Error: ${res.error}`
      }
    } catch (err: any) {
      formMessage.value = `Error: ${err.message || 'Unknown error'}`
    } finally {
      loading.value = false
    }
  }



  return {
    loading,
    formMessage,
    sendLead
  }
})
