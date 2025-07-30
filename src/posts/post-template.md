---
title: "Have you ever heard Tanstack Query?"
date: "2025-07-28"
category: "React"
tags: ["React", "Hooks"]
slug: "react-hooks"
excerpt: "This article is described about Tanstack Query"
thumbnail: "/public/img/thumbnails/Tanstack-query-thumbnail.png"
---

![Tanstack Query visual illustration](/public/img/blog/tanstack-query.png)

When you fetch data from API, are you writing the code like this?


```js
const [data, setData] = useState("");
useEffect(() => {
  fetch("/api/users")
    .then(res => res.json())
    .then(setData);
}, []);
```

It is the simplest way. However, **if you add it to "await", "error", "cache"etc, need to add more state and useEffect.** The code will be so messy. Using TanStack Query, it will be simplified async.

## What TanStack Query can do for us?
It fetch and manage Async data with one hook.

original
```js
import { useState, useEffect } from 'react';

function UserList() {
//many states and many effects
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;


  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```
Tanstack
```js
import { useQuery } from '@tanstack/react-query';

const fetchUsers = async () => {
  const res = await fetch('/api/users');
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
};

function UserList() {
  const { data: users, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```
### What is difference
- **Manage the loading:**  Just use "isLoading"
- **error:** isError
- **fetch Data:**-- give data to queryFunction
- **cache:** auto cache
- You can decide when it refetchs API

## TanStack Query VS Redux VS SWR
![async state tools compared by ease of use](/public/img/blog/tanstack_redux_swr.png)

### LibraryPurpose

- **Tanstack Query:**  Manage async server state( API data fetching, cache )
- **Redux:** Manage global app state. especially complex UI logic
- **SWR:** lightweight data fetching library, great for static apps.

 ### When should you use each?
 Use TanStack Query when:
  - You need to fetch and cache data from an API
  - You want automatic background refetching
  - You’re building dashboards, tables, or lists
  - You want powerful dev tools and built-in error/loading states

  ### Use Redux when:
  - You’re managing global UI state (like modals, login status, theme)
  - Your app has complex, deeply shared state logic
  - You need full control over how state updates work

  ### Use SWR when:
  - You want something minimal and fast
  - You're working on static sites or using Next.js
  - You need to fetch simple remote data without much overhead



