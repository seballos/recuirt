const SkillForm = ({ onChange, id }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 my-4">
      <div>
        <input
          required
          type="text"
          name="skillName"
          placeholder="Name"
          onChange={onChange}
          className="block w-full rounded-md border-0 p-1.5 me-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <input
          min="0"
          required
          step="any"
          type="number"
          name="experience"
          onChange={onChange}
          placeholder="Years of Experience"
          className="block w-full rounded-md border-0 p-1.5 me-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <input
          min="0"
          max="5"
          required
          step="any"
          type="number"
          name="weight"
          onChange={onChange}
          placeholder="Weight"
          className="block w-full rounded-md border-0 p-1.5 me-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="mustHave"
            onChange={onChange}
            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 me-3"
          />
          <span className="font-medium text-white">Must have</span>
        </label>
      </div>
    </div>
  );
};

export default SkillForm;
