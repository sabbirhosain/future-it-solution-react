import React, { useEffect } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { BsEyeFill } from 'react-icons/bs';
import { BiEditAlt, BiTrash } from 'react-icons/bi';
import { useAppointmentContextProvider } from '../../../Context/AppointmentContext';

const MeetingScheduleTable = () => {
  const { getAppointment, handleError, isLoading, appointment, searchFilter, fromDate, toDate, status } = useAppointmentContextProvider();
  useEffect(() => { getAppointment(1) }, [searchFilter, fromDate, toDate, status]);

  // data table page change
  const onPageChange = (page) => {
    getAppointment(page);
  };

  const columns = [
    {
      name: "SL",
      selector: (row, index) => (index + 1),
      width: "60px"
    },
    {
      name: "Meeting Date",
      selector: row => row.meeting_date_formated ?? 'N/A'
    },
    {
      name: "Meeting Time",
      selector: row => row.meeting_time ?? 'N/A'
    },
    {
      name: "Time Zone GMT",
      selector: row => row.time_zone_gmt_and_utc ?? 'N/A'
    },
    {
      name: "Meeting Type",
      selector: row => row.meeting_type ?? 'N/A'
    },
    {
      name: "Status",
      selector: row => {
        if (row.status === 'scheduled') {
          return (<button style={{ backgroundColor: "orange", padding: "5px 20px", color: "white", borderRadius: "0px" }}>Scheduled</button>);
        } else if (row.status === 'completed') {
          return (<button style={{ backgroundColor: "green", padding: "5px 20px", color: "white", borderRadius: "0px" }}>Completed</button>);
        } else if (row.status === 'cancelled') {
          return (<button style={{ backgroundColor: "red", padding: "5px 20px", color: "white", borderRadius: "0px" }}>Cancelled</button>);
        } else if (row.status === 'rescheduled') {
          return (<button style={{ backgroundColor: "gray", padding: "5px 20px", color: "white", borderRadius: "0px" }}>Rescheduled</button>);
        } else {
          return null;
        }
      }
    },
    {
      name: "Meeting Link",
      selector: row => row.meeting_link ? <a href={row.meeting_link}>Join</a> : 'N/A'
    },
    {
      name: "Action",
      cell: row => <div className="d-flex align-items-center gap-2">
        <Link to={`/users/view/${row._id}`} className="btn btn-outline-primary rounded-0 btn-sm"><BsEyeFill /></Link>
        <Link to={`/users/update/${row._id}`} className="btn btn-outline-success rounded-0 btn-sm"><BiEditAlt /></Link>
        <button type="button" onClick={() => userDelete(row._id)} className="btn btn-outline-danger rounded-0 btn-sm"><BiTrash /></button>
      </div>,
      width: "150px"
    }
  ];

  if (handleError) {
    return <div className="text-center">{handleError.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={appointment.payload}
          pagination
          paginationServer
          paginationComponentOptions={{ noRowsPerPage: true }}
          progressPending={isLoading}
          paginationTotalRows={appointment.pagination?.total_data}
          onChangePage={onPageChange}
        />
      </>
    )
  }
}

export default MeetingScheduleTable