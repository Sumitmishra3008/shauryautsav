import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Component() {
  return (
    <Footer container className="rounded-none dark:bg-gray-900 ">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Link to="/">
              <Footer.Brand
                src="https://spardha.org.in/images/logo/spardha-logo-white.png"
                alt="ShauryaAutsav Logo"
                name="ShauryaAutsav"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <Footer.Title title="ShauryaAutsav" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">IET Lucknow, Uttar Pradesh</Footer.Link>
                <Footer.Link href="#">ShauryaAutsav@gmail.com</Footer.Link>
                <Footer.Link href="#">ShauryaAutsav@gmail.com</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Coordinator: Sandeep kumar patel <br />
                  Email:Sandeep8175063305@gmail.com <br />
                  Mobile: 6389181405
                </Footer.Link>
                <Footer.Link href="#">
                  Coordinator: Abhishek Mishra <br />
                  Email:mabhishekmishra029@gmail.com
                  <br />
                  Mobile: 6306505310
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="/" by="ShauryaAutsav" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Component;
