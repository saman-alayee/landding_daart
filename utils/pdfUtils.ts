import { jsPDF } from 'jspdf';

export function exportResponseAsPDF(content: string, fileName = 'gpt_analysis.pdf') {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  // Set up RTL text properly
  doc.setFont('Vazir', 'normal');
  doc.setFontSize(12);
  
  // Enable RTL mode
  doc.setR2L(true);

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const maxWidth = pageWidth - margin;
  const lineHeight = 7;

  // Pre-process content to handle mixed LTR/RTL text
  const processedContent = content
    // Reverse parentheses for English words and add directional marks
    .replace(/\(([a-zA-Z].*?)\)/g, '\u200E)$1(\u200F')
    // Preserve Persian numbers
    .replace(/([۰-۹])/g, '$1');

  // Split text into lines
  const lines = doc.splitTextToSize(processedContent, maxWidth);

  let y = margin;

  // Add text to PDF
  lines.forEach((line: string) => {
    if (y + lineHeight > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
    
    // Add text with proper RTL settings
    doc.text(line, pageWidth - margin, y, {
      align: 'right',
      lang: 'fa',
      isInputRtl: true,
      isOutputRtl: true,
      // Enable bidirectional support
      features: ['rtla', 'ccmp']
    });
    
    y += lineHeight;
  });

  doc.save(fileName);
}