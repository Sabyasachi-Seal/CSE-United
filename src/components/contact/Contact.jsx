import React from 'react';
import Iframe from 'react-iframe';

// ref: https://codepen.io/krisantuswanandi/pen/KxrgeZ?editors=1100

const Contact = () => {
  return (
    <section
      id='contact'
      className='w-full bg-transparent text-white flex justify-evenly items-center'
    >
      <div className='background flex min-h-[100vh] items-center w-full md:w-fit pl-12 pr-1 md:pl-0 md:pr-0 pb-8'>
        <div className='form-container p-[10px] w-full md:w-[750px] lg:w-[1000px] md:h-[600px] flex items-center justify-center'>
          <div className='form bg-slate-800 rounded-xl w-full h-full'>
            <div className='form-header flex items-center py-[10px] px-[20px] bg-slate-500 rounded-t-xl h-12'>
              <div className='form-header-left w-1/2 flex justify-left'>
                <div className='form-header-button close mx-1 inline-block w-2 h-2 mr-1 rounded-full bg-rose-600'></div>
                <div className='form-header-button maximize mx-1 inline-block w-2 h-2 mr-1 rounded-full bg-amber-300'></div>
                <div className='form-header-button minimize mx-1 inline-block w-2 h-2 mr-1 rounded-full bg-green-700'></div>
              </div>
              <div className='form-header-right flex w-1/2 justify-end'>
                <div className='form-header-ellipsis w-1 h-1 ml-1 rounded-full bg-slate-400'></div>
                <div className='form-header-ellipsis w-1 h-1 ml-1 rounded-full bg-slate-400'></div>
                <div className='form-header-ellipsis w-1 h-1 ml-1 rounded-full bg-slate-400'></div>
              </div>
            </div>
            <div className='form-body flex md:h-[90%] p-4 md:p-8 lg:p-14 flex-col md:flex-row justify-center items-center w-full'>
              <div className='form-body-item left flex flex-col justify-between w-full md:w-1/2'>
                <div className='app-title flex justify-center md:flex-col text-2xl md:text-4xl mb-4'>
                  <span>CONTACT</span>
                  <span className='ml-2 md:m-0'>US</span>
                </div>

                <div className='flex flex-col-reverse md:flex-col'>
                  <div className='form-map rounded-lg py-2 md:p-0 w-full px-2 sm:px-0'>
                    <div className='w-full h-[220px] md:w-[300px] md:h-[200px] mb-4'>
                      <Iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.078405559548!2d88.42484061488224!3d22.57617068518093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02751a9d9c9e85%3A0x7fe665c781b10383!2sTechno%20Main%20Salt%20Lake!5e0!3m2!1sen!2sin!4v1667490398485!5m2!1sen!2sin'
                        // width="300"
                        // height="200"
                        style={{ border: 0 }}
                        allowfullscreen=''
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                        className='rounded-lg w-full h-full'
                      />
                    </div>
                  </div>
                  <div className='app-contact text-sm flex flex-col pb-2 md:pb-0 px-2 sm:px-0'>
                    <p>Contact : +62 81 314 928 595</p>
                    <p>Email: </p>
                    <p>Address: </p>
                  </div>
                </div>
              </div>

              <div className='form-body-item w-full md:w-1/2 flex flex-col justify-center p-4 md:p-0'>
                <div className='app-form flex h-full w-full justify-evenly flex-col'>
                  <div className='app-form-group'>
                    <input
                      className='app-form-control w-full h-8 px-1 bg-transparent my-4'
                      placeholder='Name'
                    />
                  </div>
                  <div className='app-form-group'>
                    <input
                      className='app-form-control w-full h-8 px-1 bg-transparent my-4'
                      placeholder='Email'
                    />
                  </div>
                  <div className='app-form-group'>
                    <input
                      className='app-form-control w-full h-8 px-1 bg-transparent my-4'
                      placeholder='Contact No'
                    />
                  </div>
                  <div className='app-form-group message'>
                    <textarea
                      className='app-form-control w-full h-12 px-1 bg-transparent my-4'
                      placeholder='Message'
                    />
                  </div>
                  <div className='app-form-group buttons flex justify-evenly mt-4 md:mt-0'>
                    <button className='app-form-button'>Cancel</button>
                    <button className='app-form-button'>Send</button>
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
