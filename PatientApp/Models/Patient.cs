using System;
using System.Collections.Generic;

namespace PatientApp.Models
{
    public partial class Patient
    {
        public int PatientId { get; set; }
        public string Name { get; set; }
        public string UniqueId { get; set; }
        public string NokName { get; set; }
        public string Gender { get; set; }
    }
}
