export function Footer() {
    return (
        <footer id='footer' className=" text-white py-8 bg-blue-700">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h1 className="md:text-2xl text-xl font-bold text-blue-300">InfoAngkasa</h1>
              <p className="text-sm text-white">
                Jelajah Angkasa dengan InfoAngkasa
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-blue-300">Contact Us</h2>
              <p className="text-white">Email: example@infoangkasa.com</p>
              <p className="text-white">Phone: +62 (123) 456-7890</p>
              <p className="text-white">Address: Bogor, Universe</p>
            </div>
          </div>
          <hr className="my-8 border-t border-gray-700" />
          <p className="text-center text-white">
            &copy; 2023 InfoAngkasa. All rights reserved.
          </p>
        </div>
      </footer>
    )
}