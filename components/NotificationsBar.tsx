'use client'

import { useCallback, useEffect, useState } from 'react'
import { Bell, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface Notification {
  id: number
  message: string 
  isNew: boolean
}

interface NotificationsBarProps {
  notifications: Notification[]
}

const NotificationsBar = ({ notifications }: NotificationsBarProps) => {
  const [localNotifications, setLocalNotifications] = useState(notifications)

  const handleNotificationClick = useCallback((id: number) => {
    setLocalNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isNew: false }
          : notification
      )
    )
  }, [])

  useEffect(() => {
    setLocalNotifications(notifications)
  }, [notifications])

  const newNotificationsCount = localNotifications.filter(n => n.isNew).length

  return (
    <div className="p-2 border-b flex justify-around">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            aria-label={`${newNotificationsCount} new notifications`}
          >
            <Bell className="h-4 w-4" />
            {newNotificationsCount > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-destructive text-destructive-foreground"
                variant="destructive"
              >
                {newNotificationsCount}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-72">
          {localNotifications.length > 0 ? (
            localNotifications.map((notification) => (
              <DropdownMenuItem 
                key={notification.id}
                className="p-3 cursor-pointer"
                onClick={() => handleNotificationClick(notification.id)}
              >
                <div className="w-full">
                  <p className="text-sm break-words">{notification.message}</p>
                  {notification.isNew && (
                    <Badge variant="secondary" className="mt-1">New</Badge>
                  )}
                </div>
              </DropdownMenuItem>
            ))
          ) : (
            <DropdownMenuItem disabled>
              No notifications
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button 
        variant="ghost" 
        size="icon"
        aria-label="Favorites"
      >
        <Star className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default NotificationsBar