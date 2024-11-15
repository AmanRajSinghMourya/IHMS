
const Navbar = () => {
  return (
    <header>
          <nav className="bg-gray-800">
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between">
                      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                          <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                              <span className="absolute -inset-0.5"></span>
                              <span className="sr-only">Open main menu</span>

                              <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                              </svg>

                              <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                  <path d="M6 18 18 6M6 6l12 12" />
                              </svg>
                          </button>
                      </div>
                      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                          <div className="flex shrink-0 items-center">
                          </div>
                          <div className="hidden sm:ml-6 sm:block">
                              <div className="flex space-x-4">
                                  <a href="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-blue-500" aria-current="page">Home</a>
                                  <a href="/room" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Room</a>
                                  <a href="/patient" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Patient</a>
                                  <a href="/staff" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Staff</a>
                                  <a href="/medicine" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Medicine</a>
                                  <a href="/appointment" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Appointment</a>
                                  <a href="/prescription" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Prescription</a>
                                  <a href="/bill" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Bill</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          </nav>
    </header>
  )
}

export default Navbar
