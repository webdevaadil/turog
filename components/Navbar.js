import { Fragment, useEffect, useRef, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import logo from '../components/image/TUROG-logo.webp'
import Image from 'next/image';
import axios from 'axios';


const solutions = [
  {
    name: 'About Us',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#abts-us',
    icon: ChartBarIcon,
  },
  {
    name: 'Service Offerings',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#service-of',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'FAQ',
    description: "Connect with third-party tools that you're already using.",
    href: '#faqs',
    icon: Squares2X2Icon,
  },
  {
    name: 'Contact Us    ',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#contact',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Example() {
  const [Faq, setFaq] = useState();

  useEffect(() => {
    fetchFaq();
  }, []);
  const fetchFaq = async () => {
    let headers = {
      Authorization:"bearer 4f9279d262abf04c34eb2e03e603b321d9545e0933473e65c704e12f12c87b6be9c7668de8a178ab2ac3b6d6f578e59c92b1626d4e1f460a08cebd870e3b38acfa61337df1428a0373cbc7d5fc962248ea189b0305871522728d24be8354ca0456feccbb8b9d46e445bd71dee6d109575c9bae1e1a0f26ca36d33921a58e0fe5",
    };
    await axios.get("http://34.122.203.107:1339/api/website-info?populate=logo", {headers: headers,})
      .then((res) => setFaq(res.data.data.attributes));
  };
  console.log(Faq);
  const buttonRef = useRef();
  const handleClickPanel = () => buttonRef.current?.click();
 
  return (
    <Popover className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 heder-tp-stripes">
          <div className="flex justify-start lg:w-0 lg:flex-1">
           {Faq&& <a href="#">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto sm:h-10" src={`http://34.122.203.107:1339${Faq.logo.data[0].attributes.url}`} alt="" width={100} height={100}/>
            </a>}
          </div>  
          <div className="-my-2 -mr-2 md:hidden ">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
          <a href="#abts-us" className="font-Mulish text-base font-sm text-gray-500 hover:text-gray-900">
            About Us
            </a>

            <a href="#service-of" className="font-Mulish text-base font-sm text-gray-500 hover:text-gray-900">
            Service Offerings
            </a>
            <a href="#faqs" className="font-Mulish text-base font-sm text-gray-500 hover:text-gray-900">
             FAQ
            </a>
            <a href="#contact" className="font-Mulish text-base font-sm text-gray-500 hover:text-gray-900">
             Contact us
            </a>

          
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-3 lg:w-30">
           <a
              href="#contact"
              className="ml-8 hovs inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-gradient-to-r from-red-500 to-orange-500  px-8 py-3 text-base font-extrabold text-white shadow-sm hover:bg-black-500"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="mbwrapper absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="z-50	 divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="h-8 w-auto"
                    src={logo.src}
                    alt="Your Company"  width={100} height={100}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button ref={buttonRef} className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a onClick={handleClickPanel} onKeyDown={handleClickPanel}
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#abts-us" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  About Us
                </a>

                <a href="#service-of" className="text-base font-medium text-gray-900 hover:text-gray-700">
                Service Offerings
                </a>
                {resources.map((item) => (
                  <a onClick={handleClickPanel} onKeyDown={handleClickPanel}
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#contact"
                  className="flex w-full hovs items-center justify-center rounded-md border bg-gradient-to-r from-red-500 to-orange-500  px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Get Started Today
                </a>
            
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}