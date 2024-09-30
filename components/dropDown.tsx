import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Menu, User, Key, LogIn, Smartphone, Moon, Sun, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function DropDownMenu() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>
              <User />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Login
            <DropdownMenuShortcut>
              <Key />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Sign Up
            <DropdownMenuShortcut>
              <LogIn />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Mens</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem><Link href="/public/mens/sneaker">Sneakers</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/public/mens/dressShoes">Dress Shoes</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/public/mens/boots">Boots</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/public/mens/sandals">Sandals</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/public/mens">More...</Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          {/* sub two */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Womens</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem><Link href="/public/womens/heels">Heels</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/public/womens/flats">Flats</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/public/womens/boots">Boots</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href="/public/mens/sneaker">Sneakers</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/public/womens">More...</Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          {/* sub three */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Unisex</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Sneakers</DropdownMenuItem>
                <DropdownMenuItem>Sandals</DropdownMenuItem>
                <DropdownMenuItem>Slip-ons</DropdownMenuItem>
                <DropdownMenuItem>Athletic</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/unisex">More...</Link>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Theme</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <span>System</span>
          <DropdownMenuShortcut>
          <Smartphone />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <span>Light</span>
          <DropdownMenuShortcut>
          <Sun />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <span>Dark</span>
          <DropdownMenuShortcut>
          <Moon />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>
          <LogOut />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
