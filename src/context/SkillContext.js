import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/"


const SkillContext = createContext();

export const SkillProvider = ({ children }) => {
    const [formValues, setFormValues] = useState({
        name: "",
        slug: ""
      })

    const [skills, setSkills] = useState([])
    const [skill, setSkill] = useState([])
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

      const onChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
      }

      const getSkills = async () => {
        const apiSkills = await axios.get('skills')
        setSkills(apiSkills.data.data)
      }

      const getSkill = async () => {
        // const response = await axios.get("skills/" + id)
        // setSkill(response.data.data)
      }

      const storeSkill = async (e) => {
        e.preventDefault()
        try{
            await axios.post("skills", formValues)
            getSkill()
            navigate("skills")
        }catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
      }

  return <SkillContext.Provider value={
    { skill,
     skills,
     getSkill, 
     getSkills, 
     onChange, 
     formValues, 
     storeSkill,
     errors
    }
     }>

    {children}
  </SkillContext.Provider>;
};

export default SkillContext;
