import { Router } from "express";
import * as controller from "./controller.js"
const router=Router();
router.route("/addadmin").post(controller.addAdmin);
router.route("/adminlogin").post(controller.adminLogin);
router.route("/addstaff").post(controller.addStaff);
router.route("/stafflogin").post(controller.staffLogin);
router.route("/getfullstaff").get(controller.getFullstaff);
router.route("/getDetails/:id").post(controller.getfullDetails);
router.route("/deletestaff/:id").delete(controller.deleteStaff);
router.route("/editstaff/:id").patch(controller.editStaff);
router.route("/getusername/:phone").get(controller.forgotUsername);
router.route("/forgotepwd/:phone").patch(controller.staffFrgtPwd);
router.route("/addstudent").post(controller.addStudent);
router.route("/getfullstudent").get(controller.getStudents)
router.route("/deletestudent/:id").delete(controller.deleteStudent)



export default router;