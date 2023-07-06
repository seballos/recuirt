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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Position Name"
        {...register("positionName", { required: true })}
      />
      {errors.positionName && <span>This field is required</span>}
      <textarea
        rows={10}
        cols={40}
        placeholder="Position Description"
        {...register("positionDescription", { required: true })}
      ></textarea>
      {errors.positionDescription && <span>This field is required</span>}

      <div>
        <span>Skills</span>

        {skills.map((skill, index) => (
          <div key={skill.id}>
            <SkillForm onChange={(e) => onChange(e, skill.id)} />
            {index !== 0 && (
              <button onClick={(e) => onDeleteSkill(e, skill.id)}>
                Delete
              </button>
            )}
          </div>
        ))}

        <button onClick={onAddSkill}>Add Skill</button>
      </div>

      <input type="submit" />
    </form>
  );
};

export default PositionForm;
