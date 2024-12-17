import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

export const formSchema = Yup.object({
  fullname: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  coverletter: Yup.string()
    .min(50, "Cover letter must be at least 50 characters long")
    .required("Cover letter is required"),
});

const ApplyForm = () => {
  const nav=useNavigate();
  const { handleChange, handleSubmit, errors, values, touched, setFieldValue } =
    useFormik({
      initialValues: {
        fullname: "",
        email: "",
        resume: null,
        coverletter: "",
      },
      onSubmit: (values, { resetForm }) => {
        console.log("Form Submitted", values);
        toast.success("Successfully Applied");
        resetForm();
        nav(-1)
      },
      validationSchema: formSchema,
    });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center ">
          Apply for Job
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Full Name"
            />
            {errors.fullname && touched.fullname && (
              <p className="text-red-500 text-xs mt-1">{errors.fullname}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Resume */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Resume (optional)
            </label>
            <input
              type="file"
              name="resume"
              className="w-full px-2 py-1 text-gray-400 rounded-md bg-gray-700 focus:outline-none"
              onChange={(event) => {
                setFieldValue("resume", event.currentTarget.files[0]);
              }}
            />
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-medium mb-1">Cover Letter</label>
            <textarea
              name="coverletter"
              value={values.coverletter}
              onChange={handleChange}
              rows="4"
              placeholder="Write your cover letter here..."
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            {errors.coverletter && touched.coverletter && (
              <p className="text-red-500 text-xs mt-1">{errors.coverletter}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-transform transform hover:scale-105 shadow-md"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
