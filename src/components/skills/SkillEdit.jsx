import { useContext, useEffect } from 'react'
import SkillContext from '../../context/SkillContext'
import { useParams } from 'react-router-dom'

const SkillEdit = () => {

  const {formValues, onChange,errors, setErrors, getSkill, updateSkill} = useContext(SkillContext)
  let {id} = useParams()

  useEffect(()=>{
    getSkill(id)
    setErrors({})
  }, [])

  return (
    <div className='mt-12'>
    <form onSubmit={updateSkill}
    className="bg-white shadow-md mx-auto p-4 max-w-md rounded-sm">
      <div className="space-y-6">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
          <input
            name='name'
            value={formValues["name"]}
            onChange={onChange}
            type="text" className='border border-300 text-gray-900 text-sm rounded-md block w-full p-2' />
            {errors.name && <span className='text-sm text-red-400'>{errors.name[0]}</span>}
        </div>
      </div>
      <div className="space-y-6">
        <div className="mb-4">
          <label htmlFor="slug" className="block mb-2 text-sm font-medium">Slug</label>
          <input
            name='slug' value={formValues["slug"]} onChange={onChange}
            type="text" className='border border-300 text-gray-900 text-sm rounded-md block w-full p-2' />
            {errors.slug && <span className='text-sm text-red-400'>{errors.slug[0]}</span>}
        </div>
      </div>
      <div className="mb-4">
        <button className='"m-2 px-3 py-2 bg-indigo-500 hover:bg-indigo-700 text-white text-sm rounded-md'>Update</button>
      </div>
    </form>
  </div>
  )
}

export default SkillEdit