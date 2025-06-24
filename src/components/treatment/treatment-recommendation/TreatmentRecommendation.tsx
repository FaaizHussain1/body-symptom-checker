import { useSymptoms } from "@/contexts/symptoms-context"
import { bodyParts } from "@/utils/data/body-parts"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AlertTriangle, Download, RotateCcw, Pill, Heart, Home, Stethoscope, Activity } from "lucide-react"
import html2canvas from "html2canvas"
import { useRef } from "react"
import { getAllTreatmentsForSymptoms } from "@/utils/data/treatment-data"

export const TreatmentRecommendations: React.FC<{}> = () => {
  const { state, dispatch } = useSymptoms()
  const contentRef = useRef<HTMLDivElement>(null)

  const selectedSymptomIds = state.selectedSymptoms.map((s) => s.symptom.id)
  const treatments = getAllTreatmentsForSymptoms(selectedSymptomIds)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "medication":
        return <Pill className="h-4 w-4" />
      case "lifestyle":
        return <Heart className="h-4 w-4" />
      case "therapy":
        return <Activity className="h-4 w-4" />
      case "home_remedy":
        return <Home className="h-4 w-4" />
      case "medical_procedure":
        return <Stethoscope className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "medication":
        return "bg-blue-100 text-blue-800"
      case "lifestyle":
        return "bg-green-100 text-green-800"
      case "therapy":
        return "bg-purple-100 text-purple-800"
      case "home_remedy":
        return "bg-orange-100 text-orange-800"
      case "medical_procedure":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "mild":
        return "bg-green-100 text-green-800"
      case "moderate":
        return "bg-yellow-100 text-yellow-800"
      case "severe":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleScreenshot = async () => {
    if (contentRef.current) {
      try {
        const canvas = await html2canvas(contentRef.current, {
          backgroundColor: "#ffffff",
          scale: 2,
          logging: false,
          useCORS: true,
        })

        const link = document.createElement("a")
        link.download = `symptoms-report-${new Date().toISOString().split("T")[0]}.png`
        link.href = canvas.toDataURL()
        link.click()
      } catch (error) {
        console.error("Error taking screenshot:", error)
      }
    }
  }

  const groupedSymptoms = state.selectedSymptoms.reduce(
    (acc, selected) => {
      const bodyPart = bodyParts.find((bp) => bp.id === selected.bodyPart)
      if (bodyPart) {
        if (!acc[bodyPart.name]) {
          acc[bodyPart.name] = []
        }
        acc[bodyPart.name].push(selected)
      }
      return acc
    },
    {} as Record<string, typeof state.selectedSymptoms>,
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Treatment Recommendations</h1>
            <p className="text-gray-600 mt-2">
              {state.userDemographics?.name && `Hello ${state.userDemographics.name}, `}
              Based on your selected symptoms, here are personalized recommendations
            </p>
          </div>
          <div className="flex gap-2">
            <Button onClick={handleScreenshot} variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Save Report
            </Button>
            <Button onClick={() => dispatch({ type: "START_OVER" })} variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
              Start Over
            </Button>
          </div>
        </div>

        <div ref={contentRef} className="space-y-6">
          {/* User Info */}
          <Card>
            <CardHeader>
              <CardTitle>Patient Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {state.userDemographics?.name && (
                  <div>
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="font-medium">{state.userDemographics.name}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-600">Age</p>
                  <p className="font-medium">{state.userDemographics?.age} years</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Sex</p>
                  <p className="font-medium capitalize">{state.userDemographics?.sex}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Selected Symptoms */}
          <Card>
            <CardHeader>
              <CardTitle>Selected Symptoms ({state.selectedSymptoms.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(groupedSymptoms).map(([bodyPartName, symptoms]) => (
                  <div key={bodyPartName}>
                    <h3 className="font-semibold text-gray-900 mb-2">{bodyPartName}</h3>
                    <div className="grid gap-2 pl-4">
                      {symptoms.map((selected, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <div>
                            <span className="font-medium">{selected.symptom.name}</span>
                            <p className="text-sm text-gray-600">{selected.symptom.description}</p>
                          </div>
                          <Badge className={getSeverityColor(selected.symptom.severity)}>
                            {selected.symptom.severity}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Treatment Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended Treatments</CardTitle>
              <CardDescription>
                These recommendations are based on your selected symptoms. Always consult with a healthcare professional
                before starting any treatment.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {treatments.length > 0 ? (
                <div className="space-y-4">
                  {treatments.map((treatment, index) => (
                    <div key={treatment.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          {getTypeIcon(treatment.type)}
                          <h3 className="font-semibold text-lg">{treatment.name}</h3>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={getTypeColor(treatment.type)}>{treatment.type.replace("_", " ")}</Badge>
                          <Badge className={getSeverityColor(treatment.severity)}>{treatment.severity}</Badge>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-3">{treatment.description}</p>

                      <div className="space-y-2">
                        <div>
                          <h4 className="font-medium text-sm text-gray-900">Instructions:</h4>
                          <p className="text-sm text-gray-700">{treatment.instructions}</p>
                        </div>

                        {treatment.precautions && (
                          <div className="flex items-start gap-2 p-2 bg-amber-50 rounded">
                            <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-sm text-amber-800">Precautions:</h4>
                              <p className="text-sm text-amber-700">{treatment.precautions}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {index < treatments.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-center py-8">
                  No specific treatments found for the selected symptoms. Please consult with a healthcare professional.
                </p>
              )}
            </CardContent>
          </Card>

          {/* Medical Disclaimer */}
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-amber-800 mb-2">
                <AlertTriangle className="h-5 w-5" />
                <p className="font-medium">Important Medical Disclaimer</p>
              </div>
              <p className="text-sm text-amber-700">
                This tool is for informational purposes only and should not replace professional medical advice,
                diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider
                with any questions you may have regarding a medical condition. Never disregard professional medical
                advice or delay in seeking it because of something you have read here.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
