import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";

import SkillForm from "../SkillForm";

const PositionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, skills);
  };

  const [skills, setSkills] = useState([
    {
      id: uuidv4(),
      skillName: "",
      experience: "",
      weight: "",
      mustHave: false,
    },
  ]);

  const onChange = (e, id) => {
    const [data] = skills.filter((skill) => skill.id === id);

    if (e.target.name === "mustHave") {
      data[e.target.name] = e.target.checked;
    } else {
      data[e.target.name] = e.target.value;
    }

    setSkills((prevState) => [
      ...prevState.filter((skill) => skill.id !== id),
      data,
    ]);
  };

  const onAddSkill = (e) => {
    e.preventDefault();

    const newSkill = {
      id: uuidv4(),
      skillName: "",
      experience: "",
      weight: "",
      mustHave: false,
    };

    setSkills((prevState) => [...prevState, newSkill]);
  };

  const onDeleteSkill = (e, id) => {
    e.preventDefault();

    setSkills((prevState) => [...prevState.filter((skill) => skill.id !== id)]);
  };

  return (
    <div className="container mx-auto px-8">
      <h2 className="text-4xl font-bold mb-4">Create Position</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-span-full mb-4">
          <label
            htmlFor="positionName"
            className="block text-sm font-bold leading-6 text-white"
          >
            Position Name
          </label>
          <div className="mt-2">
            <input
              id="positionName"
              placeholder="Position Name"
              {...register("positionName", { required: true })}
              className="block w-full rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          {errors.positionName && (
            <span className="mt-3 text-sm leading-6 text-red-600">
              This field is required
            </span>
          )}
        </div>
        <div className="col-span-full mb-4">
          <label
            htmlFor="positionDescription"
            className="block text-sm font-bold leading-6 text-white"
          >
            About Position
          </label>
          <div className="mt-2">
            <textarea
              rows="5"
              id="positionDescription"
              placeholder="Position Description"
              {...register("positionDescription", { required: true })}
              className="block w-full rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
          <p className="mt-3 text-sm leading-6 text-white">
            Write a few sentences about position.
          </p>
          {errors.positionDescription && (
            <span className="mt-3 text-sm leading-6 text-red-600">
              This field is required.
            </span>
          )}
        </div>

        <div className="my-4">
          <h3 className="text-3xl font-bold mb-4">Skills</h3>

          {skills.map((skill, index) => (
            // Use index to avoid re ordering
            <div key={index}>
              <SkillForm onChange={(e) => onChange(e, skill.id)} />
              {index !== 0 && (
                <button
                  onClick={(e) => onDeleteSkill(e, skill.id)}
                  className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Delete
                </button>
              )}
            </div>
          ))}

          <div className="my-4">
            <button
              onClick={onAddSkill}
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Add Skill
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PositionForm;
