import PDFUploadAndViewer from "@/components/PDFUploadAndViewer";
import Invoice_Form from "@/form/Invoice_Form";

export default function HomePage() {
  return (
    <div className="flex flex-row w-full">
      <PDFUploadAndViewer />
      <Invoice_Form />
    </div>
  )
}
