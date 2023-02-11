/* eslint-disable-next-line */
export interface HeaderProps {}
/* eslint-disable jsx-a11y/anchor-is-valid */
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import logotipo from "../assets/eagency-light.svg";



function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Header(props: HeaderProps) {
  return (
      <>
      <h1 className="text-red-500 bg-yellow-400">Welcome to Header! test3</h1>
      <div className="bg-gray-800 py-2">
    
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <div className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Abrir Menu</span>

                  <XIcon className="block h-6 w-6" aria-hidden="true" />

                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                Imagem
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
             TEstes
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
             Teste
            </div>
          </div>
       
      </div>
      </>
  );
}

export default Header;
