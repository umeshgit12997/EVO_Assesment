using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EVO_Models.Entities
{
    public class ExceptionTracking
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity), Key()]
        public int Id { get; }

        [Required]
        public string ExceptionMethod { get; set; }
        [Required]
        public string ExceptionMessage { get; set; }
        [Required]
        public string ExceptionSource { get; set; }
        [Required]
        public string ExceptionStackTrace { get; set; }
        [Required]
        public string TargetSiteName { get; set; }
        [Required]
        public int CreatedBy { get; set; }
        [Required]
        public DateTime CreatedOn { get; set; }

        public ExceptionTracking(string ExceptionMethod, string ExceptionMessage, string ExceptionSource, string ExceptionStackTrace, string SiteName, int CreatedBy, DateTime CreatedOn)
        {
            this.ExceptionMethod = ExceptionMethod;
            this.ExceptionMessage = ExceptionMessage;
            this.ExceptionSource = ExceptionSource;
            this.ExceptionStackTrace = ExceptionStackTrace;
            this.TargetSiteName = SiteName;
            this.CreatedBy = CreatedBy;
            this.CreatedOn = CreatedOn;
        }
        public ExceptionTracking() { }
    }
}
