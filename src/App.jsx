import './App.css'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { LuPencilLine } from "react-icons/lu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { narratorVoice, textAreaPlaceHolder, videoDuration, videoStyle } from './data/data';
import * as Yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const initialValue = {
    script: "",
    videoStyle: "",
    narratorVoice: "",
    videoDuration: "",
  }

  const formDataSchema = Yup.object().shape({
    script: Yup.string().required("Script is required"),
    videoStyle: Yup.string().oneOf(Object.values(videoStyle.map((s) => s.value))).required("Video style is required"),
    narratorVoice: Yup.string().oneOf(Object.values(narratorVoice.map((v) => v.value))).required("Narrator voice is required"),
    videoDuration: Yup.string().oneOf(Object.values(videoDuration.map((d) => d.value))).required("Video duration is required"),
  });

  const onSubmit = (values) => {
    console.log(values);
    toast.success("Video generation started! This may take a few minutes.")
  }

  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <div className='flex justify-center items-center min-h-screen bg-black/60'>
        <div className='flex flex-col  w-2/3 min-h-125 bg-white border border-green-500 rounded-lg p-8'>
          <p className='text-2xl text-green-500 text-start'>Your Story</p>
          <Formik
            initialValues={initialValue}
            validationSchema={formDataSchema}
            onSubmit={onSubmit}>
            {({ isValid, setFieldValue, values }) => (
              <Form>
                <Textarea className='w-full min-h-50 mt-2' placeholder={textAreaPlaceHolder} id="script" value={values.script} onChange={(e) => {
                  setFieldValue("script", e.target.value);
                }} />
                {/* <ErrorMessage name="script" component="div" className="text-red-500 text-sm mt-1" /> */}
                <div className='grid grid-cols-3 gap-4 mt-2'>
                  <div>
                    <label className="text-sm font-medium text-green-500 mb-1">Video Style</label>
                    <Select onValueChange={(value) => setFieldValue("videoStyle", value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Video Style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {videoStyle.map((style) => (
                            <SelectItem key={style.value} value={style.value}>
                              {style.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-green-500 mb-1">Narrator Voice</label>
                    <Select onValueChange={(value) => setFieldValue("narratorVoice", value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Narrator Voice" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {narratorVoice.map((voice) => (
                            <SelectItem key={voice.value} value={voice.value}>
                              {voice.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-green-500 mb-1">Video Duration</label>
                    <Select onValueChange={(value) => setFieldValue("videoDuration", value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Video Duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {videoDuration.map((duration) => (
                            <SelectItem key={duration.value} value={duration.value}>
                              {duration.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button disabled={!isValid} type="submit" variant="outline" className='w-1/4 flex justify-center items-center mt-2 text-green-500 border-green-500 hover:bg-green-500 hover:text-white'>
                  <LuPencilLine />
                  <span>Generate Video</span>
                </Button>
              </Form>
            )}
          </Formik>

        </div>
      </div>
    </>
  )
}

export default App
