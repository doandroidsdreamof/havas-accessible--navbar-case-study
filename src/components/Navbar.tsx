import React, { useState, useEffect, useReducer } from 'react';
import navbarReducer from '../utils/navbarReducer';
import { State } from '../types/types';
import Links from './Links';

const Navbar = () => {
  const initialState: State = {
    navbarToggle: false,
    dropdownToggle: false,
    dropdownToggleSecond: false,
  };

  const [state, dispatch] = useReducer(navbarReducer, initialState);

  useEffect(() => {
    function handleEscapeKey(e: KeyboardEvent) {
      const handleKeys = e.key;
      if (handleKeys === 'Escape') {
        dispatch('escape');
      }
      if (handleKeys === 'Tab') {
        console.log(e.currentTarget);
      }
    }
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  const handleClick = function (e: React.MouseEvent<HTMLElement>) {
    const target = e.currentTarget.id;
    if (target === 'navbarTog' || target === 'navbarTogSvg') {
      dispatch('navbar');
    }
    if (target === 'dropdownNavbarLink') {
      dispatch('dropdown');
    }
    if (target === 'dropdownNavbarLink2') {
      dispatch('dropdown2');
    }
  };

  return (
    <nav className='px-2 p-3  bg-white border-gray-200 '>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <a tab-index='1' href='#' className='flex items-center'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap '>Logo.</span>
        </a>
        <button
          onClick={(e) => handleClick(e)}
          data-collapse-toggle='navbar-dropdown'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
          aria-controls='navbar-dropdown'
          aria-expanded='false'
          id='navbarTog'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='navbarTog w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
            id='navbarTogSvg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
        <div
          className={state.navbarToggle ? ' w-full md:block md:w-auto' : 'hidden  w-full md:block md:w-auto'}
          id='navbar-dropdown'
        >
          <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white '>
            <Links text={'home'} tabIndex={'2'} />

            <li>
              <button
                tab-index='3'
                onClick={(e) => handleClick(e)}
                id='dropdownNavbarLink'
                data-dropdown-toggle='dropdownNavbar'
                className='flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto '
              >
                Dropdown{' '}
                <svg
                  className='w-5 h-5 ml-1'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
              <div
                id='dropdownNavbar'
                className={
                  state.dropdownToggle
                    ? 'z-10 flex absolute  mt-3 flex-col font-normal bg-white divide-y divide-gray-100 rounded-lg shadow  w-44'
                    : 'z-10 hidden  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 '
                }
              >
                <ul className='py-2 text-sm text-gray-700 ' aria-labelledby='dropdownLargeButton'>
                  <Links dropdown={true} text={'Dashboard'} tabIndex={'4'} />
                  <Links dropdown={true} text={'Settings'} tabIndex={'5'} />
                  <Links dropdown={true} text={'Earnings'} tabIndex={'6'} />
                </ul>
                <div className='py-1'>
                  <Links dropdown={true} text={'Sign out'} tabIndex={'7'} />
                </div>
              </div>
            </li>
            <li>
              <button
                tab-index='8'
                onClick={(e) => handleClick(e)}
                id='dropdownNavbarLink2'
                data-dropdown-toggle='dropdownNavbar2'
                className='flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto '
              >
                Dropdown2{' '}
                <svg
                  className='w-5 h-5 ml-1'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
              <div
                id='dropdownNavbar2'
                className={
                  state.dropdownToggleSecond
                    ? 'z-10 flex absolute  mt-3 flex-col font-normal bg-white divide-y divide-gray-100 rounded-lg shadow  w-44'
                    : 'z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 '
                }
              >
                <ul className='py-2 text-sm text-gray-700 ' aria-labelledby='dropdownLargeButton'>
                  <Links dropdown={true} text={'Item1'} tabIndex={'9'} />
                  <Links dropdown={true} text={'Item2'} tabIndex={'10'} />
                  <Links dropdown={true} text={'Item3'} tabIndex={'11'} />
                </ul>
                <div className='py-1'>
                  <Links dropdown={true} text={'Item4'} tabIndex={'12'} />
                </div>
              </div>
            </li>
            <Links text={'Services'} tabIndex={'13'} />
            <Links text={'Pricing'} tabIndex={'14'} />
            <Links text={'Contact'} tabIndex={'15'} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
