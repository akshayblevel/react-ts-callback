import React, { useEffect, useState } from 'react';
import { getEmployeeList } from '../containers/services/employee/employeeGetEndpoints';
export function EmployeeList() {
  const [data, setData] = useState<[]>([] as any);

  useEffect(() => {
    debugger;
    getEmployeeList((res: any) => {
      setData(res.data || []);
    });
  }, []);

  return (
    <div>
      Employee List
      <hr />
      <div>
        {data.map(o => {
          return (
            <div>
              {o.name} - {o.age}
            </div>
          );
        })}
      </div>
    </div>
  );
}
