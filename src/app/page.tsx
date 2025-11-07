import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Plus, List, CircleEllipsis, Check } from 'lucide-react'
import { Badge } from "@/components/ui/badge"


const home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">

      <Card className="w-lg p-2">
        <div className="flex gap-2">
          <Input placeholder="Adicionar tarefa" />
          <Button variant="default" className="cursor-pointer"><Plus />Cadastrar</Button>
        </div>
        <Separator />
        <div className="flex gap-2 cursor-pointer">
          <Badge><List />Todas</Badge>
          <Badge><CircleEllipsis />Não finalizadas</Badge>
          <Badge><Check />Concluidas</Badge>
        </div>

      </Card>
    </main>
  )
}

export default home