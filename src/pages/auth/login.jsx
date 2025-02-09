import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; 
import { Button } from "@/components/ui/button"; 

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className="mx-auto flex flex-col w-full 
            justify-center text-center">
                <div className="text-sm space-y-6 flex flex-col text-center sm:w-[350px] mx-auto">   
                    <div>
                        <div className="text-lg font-semibold tracking-tight">
                            <h1>Login Gráfica</h1>
                        </div>
                    </div>
                <p className="mx-auto flex flex-col w-full 
            justify-center text-center">Entrar no sistema</p>
                </div>
                <div className="grid gap-6">
                    <form action="" method="POST" onSubmit={handleSubmit}>
                        <Label htmlFor="email">Email</Label>
                        <div className="grid gap-4">
                            <Input id="email" type="email" 
                            placeholder="Digite seu email" 
                            autoCapitalize="none" autoCorrect="off" 
                            autoComplete="email" required/>    
                        </div>
                        <div>
                            <Label htmlFor="password">Senha</Label>
                            <Input id="password" 
                            type="password" 
                            placeholder="Senha"
                            autoCapitalize="none"
                            autoCorrect="off"
                            autoComplete="password" required/>
                        </div>
                        <div className="mt-4">
                            <Button type="submit" className="w-1/5 bg-primary text-white rounded-md py-1 px-2">Entrar</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}