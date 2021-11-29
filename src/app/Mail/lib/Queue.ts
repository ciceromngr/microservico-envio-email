import Queue from 'bull'
import * as jobs from '../jobs'
import redisConfig from '../redisConfig'


const queues = Object.values(jobs).map(job => ({
    bull: new Queue(job.key, { redis: redisConfig }),
    key: job.key,
    handle: job.handle
}))


export default {
    queues,
    async add(key: string, data: any) {
        const queue = queues.find(queue => queue.key === key)
        return await queue.bull.add(data)
    },
    process() {
        return queues.forEach(queue => {
            queue.bull.process(queue.handle)
        })
    }
}