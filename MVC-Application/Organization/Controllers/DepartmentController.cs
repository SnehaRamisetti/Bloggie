using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CRUD.Repository;
using CRUD.Data;
using CRUD.Models;

namespace CRUD.Controllers
{
     
    public class DepartmentController : Controller
    {
        private readonly IDepartment<Department> _department;

       
        public DepartmentController(IDepartment<Department> department)
        {
             _department = department;
        }
        //GET:Department
        public IActionResult Index()
        {
            var dept =_department.Get();
            return View(dept);
        }
        //GETBYID:Department
        public IActionResult Details(int id)
        {
            var dept =_department.GetById(id);
            return View(dept);
        }
        //Add Details:Department
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]

        public IActionResult Create(Department dept)
        {
            _department.AddDepartment(dept);
            // _Department.Save();
  
            return RedirectToAction("Index");

        
        }
        //Edit Details:Department
        [HttpGet]
        public IActionResult Edit(int id)
        {
            var dept =_department.GetById(id);
            return View(dept);
        }

        [HttpPost]

        public IActionResult Edit(int id,Department dept)
        {
            _department.UpdateDepartment(id,dept);
            // _Department.Save();
  
            return RedirectToAction("Index");

        
        }
        //Delete Details:Department
       

        public IActionResult Delete(int id)
        {
            _department.DeleteDepartment(id);
            // _Department.Save();
  
            return RedirectToAction("Index");

        
        }


    }
}