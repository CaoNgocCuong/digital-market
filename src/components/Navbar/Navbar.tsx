// Libraries
import Link from "next/link";

// Components
import MaxWidthWrapper from "../common/MaxWidthWrapper";
import { Icons } from "../Icons";
import { NavItems } from "./NavItems";
import { buttonVariants } from "../ui/button";
import Cart from "../Cart";

const Navbar = () => {
  const user = null;

  const separate = <span className="h-6 w-px bg-gray-200" aria-hidden="true" />;

  return (
    <div className="bg-white sticky top-0 inset-x-0 h-16 z-50">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex items-center h-16">
              {/* TODO:  Navbar mobile */}

              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logoTransparent className="w-10 h-10" />
                </Link>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href="/sign-in"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Sign in
                    </Link>
                  )}

                  {user ? null : separate}

                  {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href="/sign-up"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      Create account
                    </Link>
                  )}

                  {user ? separate : null}

                  {user ? null : <div className="flex lg:ml-6">{separate}</div>}
                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export { Navbar };
