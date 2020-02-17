const httpErrors = require('http-errors')

const Thread = require('../../models/Thread')

const threadsService = {}

threadsService.createThread = async threadDetails => {
  const threadInfos = new Thread({
    content: threadDetails.content,
    author: threadDetails.author
  })
  const thread = await Thread.create(threadInfos)
  await thread.save()
  return {
    thread
  }
}

threadsService.getThreads = async () => {
  const threads = await Thread.find({}).populate('author')

  return {
    threads
  }
}

threadsService.getThreadById = async id => {
  const thread = await Thread.findOne({ _id: id })
    .populate('author')
    .populate('comments.author')
  if (!thread) throw httpErrors.NotFound()

  return {
    thread
  }
}

threadsService.updateThread = async (id, threadDetails) => {
  const thread = await Thread.findById(id)
  if (!thread) throw httpErrors.NotFound()

  const update = await Thread.findByIdAndUpdate(
    id,
    { $set: threadDetails },
    { new: true }
  )

  return {
    update
  }
}

threadsService.deleteThread = async id => {
  const thread = await Thread.findById(id)
  if (!thread) throw httpErrors.NotFound()

  await thread.remove()

  return {
    thread
  }
}

module.exports = threadsService
