using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PatientApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PatientApp.Controllers
{
    [Route("api/[controller]")]
    public class PatientController : Controller
    {
        PatientDAL objPatient = new PatientDAL();

        [HttpGet]
        [Route("GetAllPatients")]
        public IEnumerable<Patient> GetAllPatients()
        {
            return objPatient.GetAllPatients();
        }

        [HttpPost]
        [Route("Create")]
        public int Create([FromBody] Patient patient)
        {
            return objPatient.AddPatient(patient);
        }

        [HttpGet]
        [Route("Details/{id}")]
        public Patient Details(int id)
        {
            return objPatient.GetPatientRecord(id);
        }

        [HttpPut]
        [Route("Edit")]
        public int Edit([FromBody]Patient patient)
        {
            return objPatient.UpdatePatient(patient);
        }

        [HttpDelete]
        [Route("Delete/{id}")]
        public int Delete(int id)
        {
            return objPatient.DeletePatient(id);
        }
    }
}

