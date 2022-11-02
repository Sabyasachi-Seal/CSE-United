import React from "react";

const Contact = () => {
  return (
    <section className="min-h-[90vh] w-full bg-blue-300 text-white flex justify-evenly items-center">
      <div className="background flex min-h-[100vh] items-center">
        <div className="form-container p-[10px] w-[500px]">
          <div className="form relative bg-slate-800 rounded-xl">
            <div className="form-header flex items-center py-[10px] px-[20px] bg-slate-500 rounded-t-xl h-8">
              <div className="form-header-left w-1/2 flex justify-left">
                <div className="form-header-button close mx-1 inline-block w-2 h-2 mr-1 rounded-full bg-rose-600"></div>
                <div className="form-header-button maximize mx-1 inline-block w-2 h-2 mr-1 rounded-full bg-amber-300"></div>
                <div className="form-header-button minimize mx-1 inline-block w-2 h-2 mr-1 rounded-full bg-green-700"></div>
              </div>
              <div className="form-header-right flex w-1/2 justify-end">
                <div className="form-header-ellipsis w-1 h-1 ml-1 rounded-full bg-slate-400"></div>
                <div className="form-header-ellipsis w-1 h-1 ml-1 rounded-full bg-slate-400"></div>
                <div className="form-header-ellipsis w-1 h-1 ml-1 rounded-full bg-slate-400"></div>
              </div>
            </div>
            <div className="form-body flex">
              <div className="form-body-item left p-14 flex flex-col">
                <div className="app-title flex flex-col relative text-xl">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact text-[8px]">
                  CONTACT INFO : +62 81 314 928 595
                </div>
              </div>
              <div className="form-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="NAME" />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="CONTACT NO" />
                  </div>
                  <div className="app-form-group message">
                    <input className="app-form-control" placeholder="MESSAGE" />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button">CANCEL</button>
                    <button className="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
