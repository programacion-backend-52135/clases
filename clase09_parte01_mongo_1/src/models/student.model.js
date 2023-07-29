import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name: String,
    courses: {
        type: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "courses"
                }
            }
        ],
        default: []
    }
})

studentSchema.pre('find', function() {
    this.populate('courses.course')
})

const studentModel = mongoose.model('students', studentSchema)

export default studentModel