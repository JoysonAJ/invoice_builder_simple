import { useFormik } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const invoiceSchema = Yup.object({
  vendor: Yup.string().required("Vendor is required"),
  poNumber: Yup.string().required("PO Number is required"),
  invoiceNumber: Yup.string().required("Invoice Number is required"),
  invoiceDate: Yup.date().required("Invoice Date is required"),
  totalAmount: Yup.number().required("Total Amount is required"),
  paymentTerms: Yup.string().required("Payment Terms are required"),
  invoiceDueDate: Yup.date().required("Invoice Due Date is required"),
  glPostDate: Yup.date().required("GL Post Date is required"),
  description: Yup.string().required("Description is required"),
  lineAmount: Yup.number().required("Line Amount is required"),
  department: Yup.string().required("Department is required"),
  account: Yup.string().required("Account is required"),
  location: Yup.string().required("Location is required"),
  expenseDescription: Yup.string().required("Expense Description is required"),
});

export default function Invoice_Form() {
  const formik = useFormik({
    initialValues: {
      vendor: "",
      poNumber: "",
      invoiceNumber: "",
      invoiceDate: "",
      totalAmount: "",
      paymentTerms: "",
      invoiceDueDate: "",
      glPostDate: "",
      description: "",
      lineAmount: "",
      department: "",
      account: "",
      location: "",
      expenseDescription: "",
      comments: "",
    },
    validationSchema: invoiceSchema,
    onSubmit: (values, { resetForm, }) => {
      // ✅ Handle normal form submission
      console.log("Form Submitted ✅", values);
      alert("Invoice Submitted Successfully!");
      resetForm(); // Clear all fields
    },
  });

  return (
    <form
      onSubmit={() => formik.handleSubmit()}
      className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-xl space-y-8 w-full"
    >
      <section>
        <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-600 mb-4">
          <span>📦</span> Vendor Details
        </h2>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Vendor *
            </label>
            <input
              type="text"
              name="vendor"
              onChange={formik.handleChange}
              value={formik.values.vendor}
              className="w-full border rounded-md px-3 py-2"
              placeholder="Select Vendor"
            />
            {formik.errors.vendor && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.vendor}
              </p>
            )}
          </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
          <div className="px-4 pt-2">
            <label className="block text-gray-700 font-medium mb-2 ">
            550 Main St, Lynn
            </label>
            
          </div>
        </div>
      </section>

      {/* Invoice Details*/}
      <section>
        <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-600 mb-4">
          <span>🧾</span> Invoice Details
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Invoice Number *</label>
            <input
              type="text"
              name="invoiceNumber"
              onChange={formik.handleChange}
              value={formik.values.invoiceNumber}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Invoice Date *</label>
            <input
              type="date"
              name="invoiceDate"
              onChange={formik.handleChange}
              value={formik.values.invoiceDate}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Total Amount *</label>
            <input
              type="number"
              name="totalAmount"
              onChange={formik.handleChange}
              value={formik.values.totalAmount}
              className="w-full border rounded-md px-3 py-2"
              placeholder="$ 0.00"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Payment Terms *</label>
            <select
              name="paymentTerms"
              onChange={formik.handleChange}
              value={formik.values.paymentTerms}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Select</option>
              <option value="Net 15">Net 15</option>
              <option value="Net 30">Net 30</option>
              <option value="Net 45">Net 45</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Invoice Due Date *
            </label>
            <input
              type="date"
              name="invoiceDueDate"
              onChange={formik.handleChange}
              value={formik.values.invoiceDueDate}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">GL Post Date *</label>
            <input
              type="date"
              name="glPostDate"
              onChange={formik.handleChange}
              value={formik.values.glPostDate}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 mb-2">
              Invoice Description *
            </label>
            <input
              type="text"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter description"
            />
          </div>
        </div>
      </section>

      {/* Expense Details  */}
      <section>
        <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-600 mb-4">
          <span>💰</span> Expense Details
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2">Line Amount *</label>
            <input
              type="number"
              name="lineAmount"
              onChange={formik.handleChange}
              value={formik.values.lineAmount}
              className="w-full border rounded-md px-3 py-2"
              placeholder="$ 0.00"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Department *</label>
            <input
              type="text"
              name="department"
              onChange={formik.handleChange}
              value={formik.values.department}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Account *</label>
            <input
              type="text"
              name="account"
              onChange={formik.handleChange}
              value={formik.values.account}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Location *</label>
            <input
              type="text"
              name="location"
              onChange={formik.handleChange}
              value={formik.values.location}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-gray-700 mb-2">
              Expense Description *
            </label>
            <input
              type="text"
              name="expenseDescription"
              onChange={formik.handleChange}
              value={formik.values.expenseDescription}
              className="w-full border rounded-md px-3 py-2"
              placeholder="Enter expense description"
            />
          </div>
        </div>
      </section>

      {/* ================= Comments Section ================= */}
      <section>
        <h2 className="flex items-center gap-2 text-xl font-semibold text-blue-600 mb-4">
          <span>💬</span> Comments
        </h2>

        <textarea
          name="comments"
          onChange={formik.handleChange}
          value={formik.values.comments}
          className="w-full border rounded-md px-3 py-2 h-24"
          placeholder="Add a comment and use @Name to tag someone..."
        />
      </section>

      {/*  Action Buttons  */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={handleSaveAsDraft}
          className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
        >
          Save as Draft
        </button>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Submit & New
        </button>
      </div>
    </form>
  );

  function handleSaveAsDraft() {
    console.log("Draft Saved 💾", formik.values);
    alert("Invoice saved as draft!");
    formik.resetForm(); // Clear all fields
  }
}
