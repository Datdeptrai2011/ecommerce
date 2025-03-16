import * as ReactHookForm from 'react-hook-form';
const { useForm } = ReactHookForm;
import { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

export default function management() {
    return (
        <>
      <div className="row mt-4 mx-4">
        <div className="col-12">
          <div className="alert alert-light" role="alert">
            This feature is available in <strong>Argon Dashboard 2 Pro Laravel</strong>. Check it
            <strong>
              <a href="https://www.creative-tim.com/product/argon-dashboard-pro-laravel" target="_blank">
                here
              </a>
            </strong>
          </div>
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6>Users</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Role
                      </th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Create Date</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex px-3 py-1">
                          <div>
                            <img src="./img/team-1.jpg" className="avatar me-3" alt="image" />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Admin</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">Admin</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <p className="text-sm font-weight-bold mb-0">22/03/2022</p>
                      </td>
                      <td className="align-middle text-end">
                        <div className="d-flex px-3 py-1 justify-content-center align-items-center">
                          <p className="text-sm font-weight-bold mb-0">Edit</p>
                          <p className="text-sm font-weight-bold mb-0 ps-2">Delete</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-3 py-1">
                          <div>
                            <img src="./img/team-2.jpg" className="avatar me-3" alt="image" />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Creator</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">Creator</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <p className="text-sm font-weight-bold mb-0">22/03/2022</p>
                      </td>
                      <td className="align-middle text-end">
                        <div className="d-flex px-3 py-1 justify-content-center align-items-center">
                          <p className="text-sm font-weight-bold mb-0">Edit</p>
                          <p className="text-sm font-weight-bold mb-0 ps-2">Delete</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-3 py-1">
                          <div>
                            <img src="./img/team-3.jpg" className="avatar me-3" alt="image" />
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Member</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">Member</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <p className="text-sm font-weight-bold mb-0">22/03/2022</p>
                      </td>
                      <td className="align-middle text-end">
                        <div className="d-flex px-3 py-1 justify-content-center align-items-center">
                          <p className="text-sm font-weight-bold mb-0 cursor-pointer">Edit</p>
                          <p className="text-sm font-weight-bold mb-0 ps-2 cursor-pointer">Delete</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

        </>
    );
}
