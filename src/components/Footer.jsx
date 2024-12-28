import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function components() {
  return (
    <Footer container className="rounded-none dark:bg-gray-900 p-4">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row justify-between items-start space-y-4 sm:space-y-0">
          <div className="w-full sm:w-auto text-center sm:text-left mb-4 sm:mb-0">
            <Link to="/" className="inline-block">
              <Footer.Brand
                src="./images/shauryotsava_logo2.png"
                alt="Shauryotsava Logo"
                name="Shauryotsava"
                // className="mx-auto sm:mx-0"
                className="w-20 h-20 md:w-100% md:h-100%  "
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-auto">
            <div className="text-center sm:text-left">
              <Footer.Title title="Shauryotsava" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://maps.google.com/IETLucknow"
                  className="text-center sm:text-left"
                >
                  IET Lucknow, Uttar Pradesh
                </Footer.Link>
                <Footer.Link
                  href="mailto:Shauryotsava@gmail.com"
                  className="text-center sm:text-left"
                >
                  Shauryotsava@gmail.com
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="text-center sm:text-left">
              <Footer.Title title="Contact us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="mailto:Sandeep8175063305@gmail.com"
                  className="text-center sm:text-left"
                >
                  Coordinator: Sandeep Kumar Patel <br />
                  Email: Sandeep8175063305@gmail.com <br />
                  Mobile: 6389181405
                </Footer.Link>
                <Footer.Link
                  href="mailto:mabhishekmishra029@gmail.com"
                  className="text-center sm:text-left"
                >
                  Coordinator: Abhishek Mishra <br />
                  Email: mabhishekmishra029@gmail.com <br />
                  Mobile: 6306505310
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <Footer.Copyright
            href="/"
            by="Shauryotsava"
            year={2025}
            className="text-center sm:text-left w-full sm:w-auto"
          />
          <div className="flex space-x-6 justify-center w-full sm:w-auto">
            <Footer.Icon
              href="https://www.facebook.com/shauryotsava"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="https://www.instagram.com/shauryotsava"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://www.twitter.com/shauryotsava"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="https://www.github.com/shauryotsava"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://www.dribbble.com/shauryotsava"
              icon={BsDribbble}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default components;
