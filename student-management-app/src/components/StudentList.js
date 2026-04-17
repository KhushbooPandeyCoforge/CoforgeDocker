import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents } from "../redux/StudentAction";
import { Link } from "react-router-dom";

export function StudentList() {
  const dispatch = useDispatch();

  const students = useSelector((state) => state.students);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getAllStudents());
  }, [dispatch]);

  if (loading) {
    return <h3 className="text-center mt-3">Loading...</h3>;
  }

  if (error) {
    return <h3 className="text-danger text-center mt-3">{error}</h3>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Student List</h1>

      {students.length === 0 ? (
        <h3 className="text-center">No students</h3>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.sname}</td>
                <td>{s.course}</td>
                <td>
                  <Link
                    to={`/students/${s.id}`}
                    className="btn btn-sm btn-info"
                  >
                    Info
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">
          Home
        </Link>
      </div>
    </div>
  );
}