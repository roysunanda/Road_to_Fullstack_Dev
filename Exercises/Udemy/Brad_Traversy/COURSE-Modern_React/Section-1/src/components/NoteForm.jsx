import { useState } from "react";
import { TextInput } from "./inputs/TextInput";
import { SelectInputs } from "./inputs/SelectInputs";
import { TextAreaInput } from "./inputs/TextAreaInput";

export const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    priority: "Medium",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`form submitted: ${formData}`);
    if (!formData.title || !formData.description) {
      return;
    }

    const newNote = { id: Date.now(), ...formData };
    // console.log(newNote);
    setNotes([...notes, newNote]);

    // Reset form data
    setFormData({
      title: "",
      category: "work",
      priority: "Medium",
      description: "",
    });
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className='w-full bg-gray-100 border border-gray-300 test-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4'>
        {isFormVisible ? "Hide Form ❌" : "Add New Note ➕"}
      </button>

      {/* Form */}
      {isFormVisible && (
        <form className='mb-6' onSubmit={handleSubmit}>
          <TextInput
            label='Title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            required
          />
          <SelectInputs
            label='Priority'
            name='priority'
            value={formData.priority}
            onChange={handleChange}
            options={[
              {
                value: "High",
                label: "High",
              },
              {
                value: "Medium",
                label: "Medium",
              },
              {
                value: "Low",
                label: "Low",
              },
            ]}
          />
          <SelectInputs
            label='Category'
            name='category'
            value={formData.category}
            onChange={handleChange}
            options={[
              {
                value: "Work",
                label: "Work",
              },
              {
                value: "Personal",
                label: "Personal",
              },
              {
                value: "Ideas",
                label: "Ideas",
              },
            ]}
          />

          <TextAreaInput
            name='description'
            label='Description'
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button className='w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600'>
            Add Note
          </button>
        </form>
      )}
    </>
  );
};
