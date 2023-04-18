'use client'
import 'survey-core/modern.min.css'
import { useCallback } from 'react'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'
import SurveySchema from './surveySchema.json'


interface SurveyProps {
    model?: any
}

export default function SurveyComponent(props: SurveyProps) {





    const surveyData = new Model(SurveySchema)
    const surveyComplete = useCallback((post: any) => {
        // fetch POST goes here
        console.log(post.data)
      }, [])

      surveyData.onComplete.add(surveyComplete)

    return   (
        <Survey model={surveyData}/>
    )
}
