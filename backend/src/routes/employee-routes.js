import { Router } from "express";
import employeeController from "../controllers/employeeController.js";

const employeeRoutes = Router();

employeeRoutes.get("/", employeeController.getEmployees);
employeeRoutes.get("/:id", employeeController.getEmployeeById);
employeeRoutes.post("/add", employeeController.addEmployee);
employeeRoutes.put("/:id", employeeController.updateEmployee);
employeeRoutes.delete("/:id", employeeController.removeEmployee);
employeeRoutes.post("/login", employeeController.employeeLogin);

export default employeeRoutes;
