using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PatientApp.Models
{
    public class PatientDAL
    {
        DoctorsDBContext db = new DoctorsDBContext();

        public IEnumerable<Patient> GetAllPatients()
        {
            try
            {
                return db.Patient.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new patient record   
        public int AddPatient(Patient patient)
        {
            try
            {
                db.Patient.Add(patient);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar patient  
        public int UpdatePatient(Patient patient)
        {
            try
            {
                db.Entry(patient).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular patient  
        public Patient GetPatientRecord(int id)
        {
            try
            {
                Patient patient = db.Patient.Find(id);
                return patient;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular patient  
        public int DeletePatient(int id)
        {
            try
            {
                Patient patient = db.Patient.Find(id);
                db.Patient.Remove(patient);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }       
    }
}

