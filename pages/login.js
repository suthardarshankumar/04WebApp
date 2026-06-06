import {useState} from 'react'
import {useRouter} from 'next/router'
import { useAuth } from "@/context/AuthContext";
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'

export default function LoginPage(){
  const router = useRouter()
  const {login} = useAuth()

  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleLogin(e){
    e.preventDefault()

    try {
      setLoading(true)
      setError("")
      const response = await fetch("/api/auth/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({userId, password}),
      })

      const data = await response.json()

      if(!data.success){
        setError(data.message)
        return
      }

      login(data.user)
      router.push("/home")
    } catch (err){
      setError("Login Failed. " + err.message)
    } finally {
      setLoading(false)
      console.log("Login attempt finished")
    }
  }
  return <>
  <div className="flex min-h-screen items-center justify-center bg-slate-100">
    <Card className="w-full max-w-md">
      <CardHeader className="text-center text-2xl font-bold">
        Login
      </CardHeader>
      <CardContent>
        <form
        onSubmit={handleLogin}
        className="space-y-4">
          <Input
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          />
          <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
  </>
}