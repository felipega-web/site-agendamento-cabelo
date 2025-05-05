import dayjs from "dayjs"
import ptBR from 'dayjs/locale/pt-br'
dayjs.locale(ptBR)
import { apiConfig } from "./api-config"

export async function scheduleFetchByDay({date}) {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        const data = await response.json()

        const dailySchedules = data.filter(data => dayjs(date).isSame(data.when, "day"))

        return dailySchedules
    } catch (error) {
        console.log(error)
        alert("Nao foi possivel carregar os agendamentos desse dia")
    }
}