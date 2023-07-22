export function MainNav() {
    return (
        <nav className="bg-blue-500 p-4 sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-blue-400">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-xl">InfoAngkasa</div>
            <ul className="flex space-x-4">
              
              <li>
                <a href="#" className="text-white hover:text-blue-200">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}