import { useState } from 'react'

const SkillCreate = () => {

  const [formValues, setFormValues] = useState({
    name: "",
    slug: ""
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  return (
    <div className='mt-12'>
      <form action="" className="bg-white shadow-md mx-auto p-4 max-w-md rounded-sm">
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
            <input
              name='name'
              value={formValues["name"]}
              onChange={onChange}
              type="text" className='border border-300 text-gray-900 text-sm rounded-md block w-full p-2' />
          </div>
        </div>
        <div className="space-y-6">
          <div className="mb-4">
            <label htmlFor="slug" className="block mb-2 text-sm font-medium">Slug</label>
            <input
              name='slug' value={formValues["slug"]} onChange={onChange}
              type="text" className='border border-300 text-gray-900 text-sm rounded-md block w-full p-2' />
          </div>
        </div>
        <div className="mb-4">
          <button className='"m-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>Store</button>
        </div>
      </form>
    </div>
  )
}

export default SkillCreate