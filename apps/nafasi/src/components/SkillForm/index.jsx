const SkillForm = ({ onChange }) => {
  return (
    <div>
      <input
        required
        type="text"
        name="skillName"
        placeholder="Name"
        onChange={onChange}
      />
      <input
        min="0"
        required
        step="any"
        type="number"
        name="experience"
        onChange={onChange}
        placeholder="Years of Experience"
      />
      <input
        min="0"
        max="5"
        required
        step="any"
        type="number"
        name="weight"
        onChange={onChange}
        placeholder="Weight"
      />
      <label>
        <input
          type="checkbox"
          name="mustHave"
          placeholder="Required"
          onChange={onChange}
        />
        Must have
      </label>
    </div>
  );
};

export default SkillForm;
