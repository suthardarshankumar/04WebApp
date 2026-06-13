import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <>
    <ProtectedRoute>
      <h1>Hello</h1>
    </ProtectedRoute>
    </>
  );
}
