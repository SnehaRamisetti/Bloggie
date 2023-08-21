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
    // [Route("[controller]")]
    public class EmployeeController : Controller
    {
        private readonly IEmployee<Employee> _employee;

        // public EmployeeController()
        // {
        //      _employee = new EmpRepo(new ApplicationDB());
        // }
        public EmployeeController(IEmployee<Employee> employee)
        {
             _employee = employee;
        }
        //GET:Employee
        public IActionResult Index()
        {
            var emp =_employee.Get();
            return View(emp);
        }
        //GETBYID:Employee
        public IActionResult Details(int id)
        {
            var emp =_employee.GetById(id);
            return View(emp);
        }
        //Add Details:Employee
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]

        public IActionResult Create(Employee emp)
        {
            _employee.AddEmployee(emp);
            // _employee.Save();
  
            return RedirectToAction("Index");

        
        }
        //Edit Details:Employee
        [HttpGet]
        public IActionResult Edit(int id)
        {
            var emp =_employee.GetById(id);
            return View(emp);
        }

        [HttpPost]

        public IActionResult Edit(int id,Employee emp)
        {
            _employee.UpdateEmployee(id,emp);
            // _employee.Save();
  
            return RedirectToAction("Index");

        
        }
        //Delete Details:Employee
        // [HttpGet]
        // public IActionResult Delete(int id)
        // {
        //     var emp =_employee.GetById();
        //     return View(emp);
        // }

        public IActionResult Delete(int id)
        {
            _employee.DeleteEmployee(id);
            // _employee.Save();
  
            return RedirectToAction("Index");

        
        }



         
    }
}