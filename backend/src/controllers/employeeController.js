import Employee from "../models/employeeModel.js";

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmployeeById = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).send("Employee not found")
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const employeeLogin = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const employee = await Employee.findOne({email})    
    if (!employee) {
      return res.status(404).json({message: "Employee not found"})
    }
    if (employee.password !== password) {
      return res.status(401).send("incorrect password")
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const addEmployee = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await Employee.findOne({ email });
    if (existingUser) return res.status(402).send("email already exist");
    const employee = new Employee({ name, email, password });
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedEmployee)
      return res.status(404).json({ message: "Employee not found" });
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    if (!deletedEmployee)
      return res.status(404).json({ message: "Employee not found" });
    res.status(200).json({message: "deleted successfully"});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  employeeLogin,
  getEmployees,
  addEmployee,
  updateEmployee,
  removeEmployee,
  getEmployeeById,
};
