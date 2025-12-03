import { Component } from '@angular/core';
import { APP_APICALLS } from '../../apicalls/app.apicalls';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {

  tableFields: any[] = [
    { field: "Sno", header: "Sno", filter: false, sortable: false, type: 'sno' },
    { field: "created", type: 'date', header: "Created", filter: false, sortable: true, },
    { field: "context", header: "Context", filter: true, sortable: true, },
    { field: "contextType", header: "Context Type", filter: true, sortable: true, },
    { field: "email", header: "Email", filter: true, sortable: true, },
    { field: "handler", header: "Operatory", filter: true, sortable: true, },
    {
      header: "PatientID",
      sortable: false,
      show: true,
      field: "patientId",
      searchField: "patientId",
      type: "relateAutoComplete",
    },
    {
      field: "description", header: "Description", filter: true, sortable: true,
      style: {
        maxWidth: '500px',
        display: 'block',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      }
    },
    { field: "ipAddress", header: 'Ip Address', filter: true, sortable: true, },
    { field: "deviceType", header: 'Device Type', filter: true, sortable: true, },
    { field: "browserName", header: 'Browser Name', filter: true, sortable: true, },
    { field: 'osName', header: 'Os', filter: true, sortable: true, },
    { field: 'osVersion', header: 'Os Version', filter: false, sortable: true, },
  ];


  type: string = 'Activities';
  header: string = 'Activities';
  apiCall: string = APP_APICALLS.activities;
  apiResponseKey: string = 'activities';
}
