'use client';

import { useState, useEffect } from 'react';

export default function MessageComponent() {
  const [message, setMessage] = useState<string>('Loading...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello', {
          headers: {
            'Accept': 'text/plain',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.text();
        if (mounted) {
          setMessage(data);
          setError(null);
        }
      } catch (error) {
        if (mounted) {
          setError('Error connecting to backend');
          console.error('Error:', error);
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return <p className="text-xl text-red-600">{error}</p>;
  }

  return (
    <p className="text-xl text-gray-700">
      Message from backend: {message}
    </p>
  );
}
